import type { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};

export default handler;
