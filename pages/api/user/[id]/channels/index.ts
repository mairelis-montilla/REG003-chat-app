import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserChannels, getChannelsToDiscover } from '../../../../../controller/channels';
import { requireAuth } from '../../../../../middlewares/auth';

export default function userChannel(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        return getChannelsToDiscover(req, res)
    }
    else {
        console.log('hola mal todo')
    }
}