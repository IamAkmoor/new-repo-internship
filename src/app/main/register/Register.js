import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FirebaseRegisterTab from './tabs/FirebaseRegisterTab';

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText
  },
  leftSection: {},
  rightSection: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText
  }
}));

function Register() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div
      className={clsx(classes.root, 'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24')}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
      >
        <Card
          className={clsx(classes.leftSection, 'flex flex-col w-full max-w-sm items-center justify-center shadow-0')}
          square
        >
          {/* <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320"> */}
          <CardContent className="flex flex-col items-center justify-center w-full max-w-320">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
              <div className="flex items-center justif-center mb-32">
                <img className="logo-icon w-224 pt-10" src="https://cargofleet.us/assets/img/logo.png" alt="logo" />
                <div className="border-l-1 mr-4 w-1 h-40" />
                
              </div>
            </motion.div>

              <FirebaseRegisterTab />
          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">Already have an account?</span>
              <Link className="font-normal" to="/login">
                Login
              </Link>
            </div>
            <Link className="font-normal mt-8" to="/">
              Back to Dashboard
            </Link>
          </div>
        </Card>

        <div className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}>
          <div className="max-w-320">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
              <Typography variant="h3" color="inherit" className="font-semibold leading-tight">
              The easy platform for fleet
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
              <Typography variant="subtitle1" color="inherit" className="mt-32">
              All-in-one platform to organize documents, digitize large volumes of physical papers and automate
                several workflow processes.
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
