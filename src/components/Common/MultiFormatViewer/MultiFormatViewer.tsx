import React, {useState, useEffect, useCallback} from "react";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import './MultiFormatViewer.scss';
import Copyable from '../../../components/Common/Copyable/Copyable';
import { Tooltip } from "@mui/material";

interface MultiFormatViewerProps {
    view?: 'utf8' | 'base64';
    value: string;
    style?: Record<string, any>;
}

const defaultStyle = { marginLeft: '0px' };

export default function MultiFormatViewer(props: MultiFormatViewerProps): JSX.Element {
    const { value, view: defaultView = 'utf8', style = defaultStyle, } = props;

    const [view, setView] = useState(defaultView);
    const [displayValue, setDisplayValue] = useState<string>();

    const changeView = useCallback((_, nextView) => {
        if (nextView) 
            setView(nextView)
    }, []);

    useEffect(() => {
        if (view === 'utf8') {
            setDisplayValue(atob(value));
        } else {
            setDisplayValue(value);
        }
    }, [value, view]);

    return <div className="HFlex">
        {displayValue}
        <ToggleButtonGroup style={style} size="small" value={view} exclusive onChange={changeView} className="threequarterscale">
            <Tooltip title="Text (UTF-8)">
                <ToggleButton value="utf8" aria-label="text">
                    <TitleOutlinedIcon />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Base 64 encoded">
                <ToggleButton value="base64" aria-label="base64">
                    <FormatBoldOutlinedIcon />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
        <Copyable value={displayValue} />
    </div>;
}
