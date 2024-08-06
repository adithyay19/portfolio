import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';


export default function ScrollToTop() {
    <Fab onClick={() => {window.scrollTo({top:0, behavior: "smooth"})}}>
        <NavigationIcon />
    </Fab>
}