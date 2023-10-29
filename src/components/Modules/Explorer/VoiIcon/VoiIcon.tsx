import './VoiIcon.scss';
import voiLogo from '../../../../assets/images/voi-logo.png';

function VoiIcon(props): JSX.Element {

  let {width} = props;
  if (!width) {
    width = 15;
  }
  return (
      <img src={voiLogo} className="voi-icon" alt="voi-icon" style={{width: width + 'px'}}/>
  );
}

export default VoiIcon;
