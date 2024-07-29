// import { NextApiRequest, NextApiResponse } from 'next';
// import cookie from 'cookie';

// export function setAuthCookie(res: NextApiResponse, token: string) {
//   res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== 'development',
//     sameSite: 'strict',
//     maxAge: 3600,
//     path: '/'
//   }));
// }

// export function removeAuthCookie(res: NextApiResponse) {
//   res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== 'development',
//     sameSite: 'strict',
//     maxAge: -1,
//     path: '/'
//   }));
// }

// export function getAuthToken(req: NextApiRequest): string | null {
//   const cookies = cookie.parse(req.headers.cookie || '');
//   return cookies.auth || null;
// }
