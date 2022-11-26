import { useLocation, useNavigate } from 'react-router';
import '../styles/button.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { IconButton } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function HomeButton(props) {
    let navigate = useNavigate();
    const redirect = () => {
        let path = `/my-portfolio/${props.path}`;
        navigate(path)
    }
    return (
        <button className="button--tertiary" onClick={redirect}>
            {props.name}
        </button>
    )
}

export function ReturnHomeButton() {
    const scrollToTop = () => {
        scroll.scrollToTop();
      }
    return (
        <IconButton
            onClick={scrollToTop}
            sx={{
                height: "50px",
                width: "50px"
            }}
        >
            <HomeRoundedIcon/>
        </IconButton>
    )
}