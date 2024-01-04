const client = require("../database/db");

class WalletModel {
  async getUserAmount(userId) {
    try {
      const result = await client.query(
        "select amount from wallet where user_id = $1",
        [userId]
      );
      if (result.rows.length <= 0) return [];
      else return result.rows[0].amount;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new WalletModel();
