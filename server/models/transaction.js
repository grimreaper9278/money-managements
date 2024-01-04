const client = require("../database/db");
const WalletModel = require("./wallet");
class TransactionModel {
  async getTransactionList(userId) {
    try {
      const transactionsListQuery =
        "select t.id, t.amount, t.title, tt.id as type_id, tt.name from transactions t inner join transaction_type tt on t.type_id = tt.id where user_id = $1";
      const result = await client.query(transactionsListQuery, [userId]);
      if (result.rows.length <= 0) return [];
      else return result.rows;
    } catch (error) {
      return false;
    }
  }

  async transaction(payload) {
    const { amount, title, userId, transactionTypeId } = payload;
    const logTransactionHistoryQuery =
      "insert into transactions(amount, title, user_id, type_id) values ($1, $2, $3, $4)";
    const updateWalletQuery = "update wallet set amount = $1";
    try {
      await client.query(logTransactionHistoryQuery, [
        amount,
        title,
        userId,
        transactionTypeId,
      ]);
      /* 
        Transaction type id (1) = Add
        Transaction type id (2) = Minus
      */
      let walletAmount = await WalletModel.getUserAmount(userId);

      if (transactionTypeId === 1) walletAmount += amount;
      else walletAmount -= amount;

      await client.query(updateWalletQuery, [walletAmount]);

      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new TransactionModel();
