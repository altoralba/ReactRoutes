import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import '../App.css';

import { Link } from "react-router-dom";

export default function MainAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton
                    edge="start"
                    style={{
                        marginRight: 20,
                    }}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton> */}
                <div className="div-title">
                    <Typography
                        component={Link}
                        to="/"
                        variant="h6"
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>
                        Blogsite
                    </Typography>
                </div>
                <Button color="inherit" component={Link} to="/about/">About</Button>
                <Button color="inherit" component={Link} to="/blog/">Blog</Button>
            </Toolbar>
        </AppBar>
    );
}

