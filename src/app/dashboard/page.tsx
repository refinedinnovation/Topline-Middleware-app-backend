// import * as React from 'react';
// import type { Metadata } from 'next';
// import Grid from '@mui/material/Unstable_Grid2';
// import dayjs from 'dayjs';

// import { config } from '@/config';
// import { Budget } from '@/components/dashboard/overview/budget';
// import  LatestOrders  from '@/components/dashboard/overview/latest-orders';
// // import { LatestProducts } from '@/components/dashboard/overview/latest-products';
// import { Sales } from '@/components/dashboard/overview/sales';
// import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
// import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
// import { TotalProfit } from '@/components/dashboard/overview/total-profit';
// import { Traffic } from '@/components/dashboard/overview/traffic';

// export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

// export default function Page(): React.JSX.Element {
//   return (
//     <Grid container spacing={3}>
//       <Grid lg={3} sm={6} xs={12}>
//         <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
//       </Grid>
//       <Grid lg={3} sm={6} xs={12}>
//         <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
//       </Grid>
//       <Grid lg={3} sm={6} xs={12}>
//         <TasksProgress sx={{ height: '100%' }} value={75.5} />
//       </Grid>
//       <Grid lg={3} sm={6} xs={12}>
//         <TotalProfit sx={{ height: '100%' }} value="$15k" />
//       </Grid>
//       <Grid lg={8} xs={12}>
//         <Sales
//           chartSeries={[
//             { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
//             { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
//           ]}
//           sx={{ height: '100%' }}
//         />
//       </Grid>
//       <Grid lg={4} md={6} xs={12}>
//         <Traffic chartSeries={[75, 15, 10]} labels={['Successful', 'Failed', 'Pending']} sx={{ height: '100%' }} />
//       </Grid>
     
//       { <Grid lg={12} md={12} xs={12}>
//         <LatestOrders vendors={[]} />
       
//       </Grid>}
//     </Grid>
//   );
// }
"use client";
import React, { useEffect, useState } from 'react';
import {
    Table,
    Card, CardHeader, Divider, Box,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
} from '@mui/material';
// import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import LatestOrders from '@/components/dashboard/overview/latest-orders';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { getAllVendor } from '@/service/vendor/getAllVendor';
import Chip from '@mui/material/Chip';
import type { SxProps } from '@mui/material/styles';
import dayjs from 'dayjs';

// export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;


// interface Vendor {
//   id:string;
//   firstName: string;
//   lastName:string;
//   contactNumber:boolean;
//   email: string;
//   companyName: string;
//   companyAddress: string;
//   createdAt:string;
//   role: string;
//   logs:string;
//   jobStatus:string;
// }

// interface VendorTableProps {
//   vendors: Vendor[];
//   trigger: boolean;
// }


export default function Page(): React.JSX.Element  {
  // const [vendors, setVendors] = useState<Vendor[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  

  // React.useEffect(() => {
  //   const fetchVendors = async () => {
  //                   try {
  //                       const response = await getAllVendor() as any;
  //                       setVendors(response?.data?.data);
  //                   } catch (error) {
  //                       console.error('Error fetching vendors:', error);
  //                   } finally {
  //                       setLoading(false);
  //                   }
  //               };
        
  //               fetchVendors();
  //           }, []);
  

  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[75, 15, 10]} labels={['Successful', 'Failed', 'Pending']} sx={{ height: '100%' }} />
      </Grid>
      {/* <Grid lg={12} md={12} xs={12}> */}
      
      {/* </Grid> */}
    </Grid>
  );
}
