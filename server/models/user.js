const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const client = require("../database/db");

const JWT_SECRET = "MoneyManagement";
const JWT_EXPIRE = "30d";

class UserModel {
  async register(user) {
    const { username, password } = user;
    const hashPass = await this.encryptPass(password);

    try {
      const result = await client.query(
        "insert into users (username, password) values ($1 , $2)",
        [username, hashPass]
      );
      if (result.rows) return true;
      else return false;
    } catch (error) {
      return false;
    }
  }

  async login(payload) {
    const { username } = payload;
    const enteredPass = payload.password;

    try {
      const result = await client.query(
        "select id, password from users where username = $1",
        [username]
      );
      if (result?.rows.length <= 0) {
        return { success: false, message: "User not found ... !" };
      }
      const { id, password } = result.rows[0];
      const checkedPass = await this.bcryptPass(enteredPass, password);
      if (checkedPass) {
        const generatedToken = await this.genToken(id);
        return { success: true, token: generatedToken };
      } else {
        return { success: false, message: "Invalid Credential ... !" };
      }
    } catch (error) {
      return false;
    }
  }

  bcryptPass = async (enteredPass, password) => {
    const result = await bcrypt.compare(enteredPass, password);
    return result;
  };

  encryptPass = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const newPass = await bcrypt.hash(password, salt);
    return newPass;
  };

  genToken = async (id) => {
    return await jwt.sign({ id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
  };
}

module.exports = new UserModel();
