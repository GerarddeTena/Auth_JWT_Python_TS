// @ts-ignore
import ReactLogo from '../assets/react.svg';
// @ts-ignore
import PythonLogo from '../assets/python-svgrepo-com.svg';
// @ts-ignore
import TSLogo from '../assets/typescript-svgrepo-com.svg';
import '../styles/views/Home.scss';
export const Home = () => {

    const svg = {
        react: ReactLogo,
        python: PythonLogo,
        typescript: TSLogo
    }
    return (
        <main>
            <h1 className='title'>Auth Project using React, TS & Python</h1>
            <div className='logos'>
                <img style={{width: '200px'}} src={svg.react} alt="react logo"/>
                <img style={{width: '200px'}} src={svg.python} alt="react logo"/>
                <img style={{width: '200px'}} src={svg.typescript} alt="react logo"/>
            </div>
        </main>
    );
};