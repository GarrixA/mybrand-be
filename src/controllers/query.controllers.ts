import { Request, Response } from "express";
import Query from "../models/querySchema";

//create queries
const httpCreateQuery = async (req: Request, res: Response) => {
  try {
    const query = new Query({
      name: req.body.name,
      message: req.body.message,
    });

    await query.save();
    res.status(200).json({ message: "Message created", data: query });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get query
const httpGetQueries = async (req: Request, res: Response) => {
  try {
    const queries = await Query.find({});
    res.status(200).json({ message: "List of queries", dada: queries });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//get one query
const httpGetOneQuery = async(req: Request, res: Response) => {
  try {
    const query = await Query.findOne({ _id: req.params.id });

    if (!query) {
      res.status(404).json({ message: "We can't find any query" });
    }
    res.status(200).json({ message: "query found", data: query });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// delete query
const httpDeleteQuery = async (req: Request, res: Response) => {
  try {
    const deleted = await Query.deleteOne({ _id: req.params.id });
    if (deleted.deletedCount === 0) {
      res.status(400).json({ message: "No Query to be deleted" });
    }

      res.status(204).send();

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default { httpCreateQuery, httpGetQueries, httpGetOneQuery, httpDeleteQuery };
