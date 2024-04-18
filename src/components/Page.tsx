import Head from 'next/head';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
    <>
        <Head>
            <title>{`${title} | Cashking`}</title>
            {meta}
        </Head>

        <Box ref={ref} sx={{ width: '100%' }} {...other}>
            {children}
        </Box>
    </>
));

Page.displayName = 'Page'; // Add display name


export default Page;
