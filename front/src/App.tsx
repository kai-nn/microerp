import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BiotechIcon from '@mui/icons-material/Biotech';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import BugReportIcon from '@mui/icons-material/BugReport';



// загружать с api
const links = [
    {
        label: 'Главная',
        url: '',
        icon: <HomeOutlinedIcon />
    },
        {
        label: 'Деталь',
        url: 'detail',
        icon: <ArchitectureIcon />
    },
    {
        label: 'Технология',
        url: 'review',
        icon: <PrecisionManufacturingOutlinedIcon />
    },
    {
        label: 'Вход',
        url: 'login',
        icon: <LoginIcon />
    },
    {
        label: 'Выход',
        url: 'logout',
        icon: <LogoutIcon />
    },
    // {
    //     label: 'Тесты',
    //     url: 'test',
    //     icon: <BiotechIcon />
    // },
    {
        label: 'Тесты',
        url: 'test_jwt',
        icon: <BugReportIcon />
    },
]

function App() {
    return (
        <div>
            <Header links={links} />
            <Main />
            <Footer />
        </div>
    );
}

export default App;