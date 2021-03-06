import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';
import { layoutStyles } from '../style-utils/LayoutStyles';
import SideNav from './SideNav';
import MainContent from './MainContent';
import PaymentInitiationForm from '../components/PaymentIntiationForm';
import CustomersList from '../components/CustomersList';
import CustomersListPaginated from '../components/CustomersListPaginated';
import CustomersListPaginatedSorted from '../components/CustomersListPaginatedSorted';
import Balance from '../components/Balance';
import Grid from '../components/Grid';

export default function AppLayout(props) {
  const classes = layoutStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        title='Payment Initiation'
      />
      <SideNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <MainContent>
        {/* <PaymentInitiationForm /> */}
        {/* <CustomersList /> */}
        <Balance />
        <br />
        <Grid />
        <br />
        <CustomersListPaginatedSorted />
      </MainContent>
    </div>
  );
}
