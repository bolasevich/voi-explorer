import React, { useState, useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const copyState = <ContentCopyOutlinedIcon fontSize="inherit" />;

const checkmarkState = <CheckOutlinedIcon color="success" fontSize="inherit" />;

export default function Copyable({ value, style }: { value: string, style?: any }): JSX.Element {
  const [icon, setIcon] = useState(copyState);

  const copy = useCallback(() => {
    setIcon(checkmarkState);
    navigator.clipboard.writeText(value);
    setTimeout(() => setIcon(copyState), 2_000);
  }, [value]);

  return <IconButton aria-label="copy" size="small" className="success" style={style} onClick={copy}>
      {icon}
    </IconButton>

}
