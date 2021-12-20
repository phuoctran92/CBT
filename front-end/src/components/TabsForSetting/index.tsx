import React from 'react';
import { Box } from '@material-ui/core';

interface TabSettingProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabsForSetting(props: TabSettingProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt="40px">
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}
export default TabsForSetting;



