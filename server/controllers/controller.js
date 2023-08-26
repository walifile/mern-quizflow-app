import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

/** get all questions */
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export const insertQuestions = async function (req, res) {
  try {
    const response = await Questions.insertMany({ questions, answers });
    // console.log(response);
    // console.log("Items added succesfully");
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

/** Delete all Questions */
export const dropQuestions = async function (req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
};

/** get all result */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** post all result */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Results.create(
      { username, result, attempts, points, achived },
      function (err, data) {
        res.json({ msg: "Result Saved Successfully...!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

/** delete all result */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
