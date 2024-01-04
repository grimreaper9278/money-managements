const client = require("../database/db");

class TransactionModel {
  async getTransactionList(userId) {
    try {
      const result = await client.query(
        "select t.id, t.amount, t.title, tt.id as type_id, tt.name from transactions t inner join transaction_type tt on t.type_id = tt.id where user_id = $1",
        [userId]
      );
      if (result.rows.length <= 0) return [];
      else return result.rows;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new TransactionModel();
