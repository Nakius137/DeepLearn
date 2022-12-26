import { connect } from "mongoose";

const createConnection = async () => {
  const options = {
    dbName: "DeepLearn",
    keepAlive: true,
  };

  try {
    await connect(process.env.MONGO_URL!, options);
  } catch (err) {
    console.log(err);
  }
};

export default createConnection;
