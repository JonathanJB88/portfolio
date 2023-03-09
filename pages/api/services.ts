import type { NextApiRequest, NextApiResponse } from 'next';
import { services, aboutSection, languages, projects, tools } from '../../data';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services, aboutSection, languages, projects, tools });
};

export default handler;
