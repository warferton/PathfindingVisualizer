import { useState, useEffect, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../styles/Modal.module.css';

export const InfoModal = forwardRef( (props, ref) => {

    const {active, onClose, title} = props;

    const [isBrowser, setIsBrowser] = useState(false);

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        setIsBrowser(true);
    }, []);


    const handleGoPageRight = () => {
        if(activePage < 6) {
            setActivePage(activePage + 1);
        }
    }

    const handleGoPageLeft = () => {
        if(activePage > 0) {
            setActivePage(activePage - 1);
        }
    }

    const onCloseHandler = (e) => {
        e.preventDefault();
        onClose();
    }
    
    const dotStyler = (index) => {
        if(activePage === index) {
            return styles.modalDotActive;
        }

        return styles.modalDot;
    }

    const pageController = (index) => {
       return activePage !== index;
    }

    const modalContent = active ? (
        <div className={ styles.modalOverlay }>
            <div className={ styles.modalContent }>
                <div className={ styles.modalHeader} >
                    <a href="#" onClick={ (e) => onCloseHandler(e) }>
                        x
                    </a>
                </div>
                <div className={ styles.modalTitle }>
                    <h3>About PathVisualiser</h3>
                </div>
                {/*  PAGE 0 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(0) }>
                    <div className={ styles.modalImage }>
                        <svg width="175" height="175" viewBox="0 0 1218 1140" fill="none" xmlns="http://www.w3.org/2000/svg" className={ styles.modalImage }>
                            <path d="M555.69 571.593C596.418 536.695 660.241 506.908 688.179 505.607L740.482 499.276L783.555 494.062L858.138 491.277C874.391 496.593 911.837 501.633 911.461 519.16C911.086 536.687 836.025 609.457 824.555 626.454C792.823 647.985 743.419 673.112 710.153 687.128C676.886 701.145 603.993 704.142 571.705 703.888C532.766 700.277 460.69 684.237 483.891 648.962C507.092 613.688 541.424 582.685 555.69 571.593Z" stroke="#FFA600" stroke-width="16"/>
                            <circle cx="678.188" cy="603.59" r="61.9816" transform="rotate(-6.90231 678.188 603.59)" fill="#FFA600"/>
                            <circle cx="678.189" cy="603.589" r="24.7927" transform="rotate(-6.90231 678.189 603.589)" fill="#585858"/>
                            <path d="M543.384 573.082L507.404 533.734" stroke="#FFA600" stroke-width="16"/>
                            <path d="M589.63 542.511L560.548 508.571" stroke="#FFA600" stroke-width="16"/>
                            <path d="M648.555 513.525L625.253 475.764" stroke="#FFA600" stroke-width="16"/>
                            <path d="M697.409 504.49L686.042 462.162" stroke="#FFA600" stroke-width="16"/>
                            <path d="M749.713 498.158L744.126 452.009" stroke="#FFA600" stroke-width="16"/>
                            <path d="M804.717 488.378L805.656 444.56" stroke="#FFA600" stroke-width="16"/>
                            <path d="M851.612 488.944L859.45 450.535" stroke="#FFA600" stroke-width="16"/>
                            <path d="M516.343 607.573L469.546 582.021" stroke="#FFA600" stroke-width="16"/>
                            <path d="M578.23 706.219L557.342 739.965" stroke="#FFA600" stroke-width="16"/>
                            <path d="M621.675 704.082L604.236 740.532" stroke="#FFA600" stroke-width="16"/>
                            <path d="M662.044 702.317L647.682 738.394" stroke="#FFA600" stroke-width="16"/>
                            <path d="M698.591 694.771L694.203 735.884" stroke="#FFA600" stroke-width="16"/>
                            <path d="M725.164 682.189L736.532 724.517" stroke="#FFA600" stroke-width="16"/>
                            <path d="M755.186 672.311L780.446 700.471" stroke="#FFA600" stroke-width="16"/>
                            <path d="M790.244 652.459L824.734 679.501" stroke="#FFA600" stroke-width="16"/>
                            <path d="M821.85 629.903L852.891 654.24" stroke="#FFA600" stroke-width="16"/>
                            <path d="M847.305 608.091L874.525 626.648" stroke="#FFA600" stroke-width="16"/>
                            <path d="M868.94 580.498L898.864 595.606" stroke="#FFA600" stroke-width="16"/>
                            <path d="M543.272 701.086L516.23 735.577" stroke="#FFA600" stroke-width="16"/>
                            <path d="M1131.1 286.443L911.254 88.8961L181.613 138.283L76.4683 727.631L557.585 1060.17L1131.1 944.932V286.443Z" stroke="#FFA600" stroke-width="20"/>
                            <ellipse cx="187.986" cy="134.99" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="1137.47" cy="279.858" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="914.441" cy="82.3112" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="563.957" cy="1056.88" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="79.6552" cy="721.046" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="1137.47" cy="938.347" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="812.482" cy="806.65" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="277.2" cy="385.216" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <ellipse cx="882.578" cy="279.858" rx="79.6552" ry="82.3112" fill="#FFA600"/>
                            <path d="M278.801 383.726L560.599 1052.25L812.419 803.426L1133.19 929.336L881.37 275.803L278.801 383.726ZM278.801 383.726L83.9397 725.482" stroke="#FFA600" stroke-width="20"/>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                            Welcome to the PathViz!
                            <br/>
                            A pathfinding algorithm visualiser app. 
                        </h3>
                        <p>
                            The application visually demonstrates how a certain pathfinding
                            algorithm would work on a 2d plane. There are currently 6
                            available pathfinding algorithms, like Dijkstra's, A-Star, IDA-Star, BFS, and DFS, with more to come!
                        </p>
                    </div>
                </div>
                 {/*  PAGE 1 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(1) }>
                    <div className={ styles.modalImage }>
                        <svg width="150" height="150" viewBox="0 0 85 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={ styles.modalImage }>
                            <ellipse cx="7.8677" cy="9.62024" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="35.6184" cy="21.7722" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="73.593" cy="29.3671" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="6.40701" cy="40" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="15.1704" cy="68.8607" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="60.448" cy="6.58228" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="56.0664" cy="73.4177" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <ellipse cx="45.8423" cy="49.1139" rx="6.40701" ry="6.58228" fill="#FFA600"/>
                            <path d="M56.0664 74.4304L46.5728 50.1266L73.5932 30.3798" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M6.40698 41.0127L56.0662 74.4304L73.593 30.3797L35.6183 23.5443L8.59783 10.6329" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M60.448 7.59494L7.86768 10.6329" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M6.40698 41.0127L7.86755 10.6329" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M6.40698 41.0127L73.593 30.3798" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M60.448 7.59494L73.5931 30.3798" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M6.40698 41.0127L35.6183 22.7848" stroke="#FFA600" strokeWidth="3"/>
                            <path d="M6.40698 41.7722L15.1704 69.8734L56.0662 74.4304" stroke="#FFA600" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                            Algorithms
                        </h3>
                        <p>
                            Buy hovering over the algorithms button you can view all the algorithms, that are available for visualising. 
                            Algorithms that are not yet available are crossed out. To start the visualisation click on the algorithm
                            you want to test and then click the "Launch" button.
                        </p>
                    </div>
                </div>
                 {/*  PAGE 2 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(2) }>
                    <div className={ styles.modalImage }>
                        <svg width="150" height="150" viewBox="0 0 85 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={ styles.modalImage }>
                            <path d="M2 77V2H77V77H2Z" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M12.6343 2.54346V15.5869M26.0672 13.9565V27H14.3134V36.7826H26.0672H37.8209V47.6522H26.0672V64.5H14.3134V54.7174H2" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M14.3135 56.3478V45.4783" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M35.0225 16.1304H52.3732V28.087H64.1269V41.6739V48.7391H52.3732V36.7826" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M58.25 49.8216V66.135" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M28.3059 57.9783H46.2164V64.5" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M57.9702 63.9566H68.0448V57.4348" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M62.4478 16.1304H75.3209" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M43.418 2.54346V15.0435" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M37.2612 17.7609V26.4565" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                            <path d="M36.7014 60.1522V69.3913" stroke="#FFA600" strokeWidth="4" strokeLinejoin="bevel"/>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                            Mazes
                        </h3>
                        <p>
                            By hovering over the "Mazes" button you can view all the maze algorithms that are available.
                            Unavailable ones will be crossed-out. To build a maze simply click on the name of the maze-building algorithm.
                        </p>
                    </div>
                </div>
                 {/*  PAGE 3 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(3) }>
                    <div className={ styles.modalImage }>
                        <svg 
                        className={ styles.modalImage }
                        width="150" 
                        height="150" 
                        viewBox="0 0 85 80" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d="M2 36.811V25.6919M2 36.811V46.8583M2 36.811H14.8731M39.5 2V13.0465M39.5 2H66.9254M39.5 2H11.5149M39.5 13.0465H53.2127M39.5 13.0465H26.6269M66.9254 13.0465V2M66.9254 13.0465H77M66.9254 13.0465H53.2127M66.9254 2H77V13.0465M77 13.0465V25.6919M77 25.6919H61.8881M77 25.6919V36.811M53.2127 13.0465V25.6919M53.2127 25.6919H61.8881M53.2127 25.6919H39.9198M26.6269 25.6919V13.0465M26.6269 25.6919H17.6716H14.8731M26.6269 25.6919H39.9198M26.6269 13.0465H14.8731M2 13.0465V2H11.5149M2 13.0465H11.5149M2 13.0465H14.8731M2 13.0465V25.6919M11.5149 13.0465V2M11.5149 13.0465H14.8731M2 25.6919H14.8731M77 46.7674H65.1063M77 46.7674V36.811M77 46.7674V56.9055M65.1063 46.7674V36.811M65.1063 46.7674H53.2127M65.1063 36.811H77M65.1063 36.811H61.8881M39.9198 36.811H20.4701M39.9198 36.811V25.6919M39.9198 36.811H43.5578M43.5578 46.7674V36.811M43.5578 46.7674H26.6269M43.5578 46.7674H53.2127M20.4701 46.7674V36.811M20.4701 46.7674H26.6269M20.4701 46.7674L2 46.8583M20.4701 36.811H14.8731M61.8881 25.6919V36.811M61.8881 36.811H43.5578M2 56.9055V46.8583M2 56.9055V66.9528M2 56.9055H14.8731M26.6269 56.9055V46.7674M26.6269 56.9055H14.8731M26.6269 56.9055H39.5M53.2127 46.7674V56.9055M53.2127 56.9055H39.5M53.2127 56.9055H61.8881M77 56.9055H61.8881M77 56.9055V66.9528M2 66.9528V77H27.1866M2 66.9528H14.8731M14.8731 66.9528V56.9055M14.8731 66.9528H27.1866M14.8731 56.9055H39.5M39.5 56.9055V66.9528M39.5 66.9528H50.694M39.5 66.9528H27.1866M61.8881 66.9528V56.9055M61.8881 66.9528H77M61.8881 66.9528H50.694M77 66.9528V77H50.694M50.694 66.9528V77M50.694 77H27.1866M27.1866 66.9528V77M14.8731 25.6919V36.811" 
                            stroke="#FFA600" 
                            strokeWidth="3" 
                            strokeLinejoin="bevel"/>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                            Walls
                        </h3>
                        <p>
                            By clicking on the "Walls" button you can toggle wall building mode. When the button is toggled 
                            you can turn any node into a wall node, which will make it impossible to traverse for the algorithm, 
                            and it would have to look for another path.
                        </p>
                    </div>
                </div>
                 {/*  PAGE 4 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(4) }>
                    <div className={ styles.modalImage }>
                        <svg width="150" height="150" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" className={ styles.modalImage }>
                            <mask
                            id="path-1-inside-1"
                            fill="white">
                            <path 
                            d="M5.35714 7.65306L11.4796 0H64.2857L69.6429 7.65306V35.9694L75 39.7959V62.7551L69.6429 68.8775L60.4592 75H11.4796L5.35714 68.8775L0 62.7551V41.3265L5.35714 35.9694V7.65306Z"/>
                            </mask>
                            <path 
                            d="M69.6429 35.9694H71.8929V35.0374L71.2338 34.3784L69.6429 35.9694ZM5.35714 35.9694L3.76615 34.3784L3.10714 35.0374V35.9694H5.35714ZM11.4796 10.7143L9.60748 9.46621L9.22959 10.033V10.7143H11.4796ZM14.5408 6.12245V3.87245H13.3367L12.6687 4.87437L14.5408 6.12245ZM60.4592 6.12245L62.2161 4.71688L61.5406 3.87245H60.4592V6.12245ZM63.5204 9.94898H65.7704V9.15972L65.2774 8.54342L63.5204 9.94898ZM14.5408 35.9694V33.7194H12.2908V35.9694H14.5408ZM60.4592 35.9694H62.7092V33.7194H60.4592V35.9694ZM60.4592 62.7551V65.0051H62.7092V62.7551H60.4592ZM14.5408 62.7551H12.2908V65.0051H14.5408V62.7551ZM37.5 44.3878L39.276 43.0064L35.676 43.0704L37.5 44.3878ZM27.551 58.1633L25.5386 59.1695L27.2 62.4923L29.375 59.4806L27.551 58.1633ZM48.2143 58.1633L46.4382 59.5446L48.7228 62.4819L50.2626 59.0943L48.2143 58.1633ZM71.2338 34.3784L65.1114 28.2559L61.9294 31.4379L68.0519 37.5604L71.2338 34.3784ZM63.5204 27.5969H11.4796V32.0969H63.5204V27.5969ZM9.8886 28.2559L3.76615 34.3784L6.94813 37.5604L13.0706 31.4379L9.8886 28.2559ZM3.10714 35.9694V68.8775H7.60714V35.9694H3.10714ZM71.8929 68.8775V35.9694H67.3929V68.8775H71.8929ZM13.7296 29.8469V10.7143H9.22959V29.8469H13.7296ZM13.3517 11.9624L16.4129 7.37052L12.6687 4.87437L9.60748 9.46621L13.3517 11.9624ZM14.5408 8.37245H60.4592V3.87245H14.5408V8.37245ZM58.7022 7.52801L61.7635 11.3545L65.2774 8.54342L62.2161 4.71688L58.7022 7.52801ZM61.2704 9.94898V29.8469H65.7704V9.94898H61.2704ZM14.5408 38.2194H60.4592V33.7194H14.5408V38.2194ZM58.2092 35.9694V62.7551H62.7092V35.9694H58.2092ZM60.4592 60.5051H14.5408V65.0051H60.4592V60.5051ZM16.7908 62.7551V35.9694H12.2908V62.7551H16.7908ZM35.676 43.0704L25.727 56.8459L29.375 59.4806L39.324 45.7051L35.676 43.0704ZM29.5635 57.157L21.1451 40.3203L17.1202 42.3328L25.5386 59.1695L29.5635 57.157ZM35.724 45.7691L46.4382 59.5446L49.9903 56.7819L39.276 43.0064L35.724 45.7691ZM50.2626 59.0943L57.9157 42.2576L53.819 40.3955L46.166 57.2322L50.2626 59.0943ZM5.35714 7.65306L1.84323 4.84193L0.857143 6.07455V7.65306H5.35714ZM11.4796 0V-4.5H9.31678L7.96568 -2.81113L11.4796 0ZM64.2857 0L67.9723 -2.58058L66.6287 -4.5H64.2857V0ZM69.6429 7.65306H74.1429V6.23456L73.3294 5.07248L69.6429 7.65306ZM69.6429 35.9694H65.1429V38.2852L67.0273 39.6312L69.6429 35.9694ZM5.35714 35.9694L8.53912 39.1514L9.85714 37.8333V35.9694H5.35714ZM5.35714 68.8775L1.97055 71.8408L2.06921 71.9536L2.17516 72.0595L5.35714 68.8775ZM11.4796 75L8.29761 78.182L9.61563 79.5H11.4796V75ZM60.4592 75V79.5H61.8217L62.9553 78.7442L60.4592 75ZM69.6429 68.8775L72.139 72.6218L72.6361 72.2904L73.0294 71.8408L69.6429 68.8775ZM75 39.7959H79.5V37.4801L77.6156 36.1341L75 39.7959ZM75 62.7551L78.3866 65.7184L79.5 64.4459V62.7551H75ZM0 62.7551H-4.5V64.4459L-3.38659 65.7184L0 62.7551ZM0 41.3265L-3.18198 38.1446L-4.5 39.4626V41.3265H0ZM8.87105 10.4642L14.9935 2.81113L7.96568 -2.81113L1.84323 4.84193L8.87105 10.4642ZM11.4796 4.5H64.2857V-4.5H11.4796V4.5ZM60.5992 2.58058L65.9563 10.2336L73.3294 5.07248L67.9723 -2.58058L60.5992 2.58058ZM65.1429 7.65306V35.9694H74.1429V7.65306H65.1429ZM9.85714 35.9694V7.65306H0.857143V35.9694H9.85714ZM2.17516 72.0595L8.29761 78.182L14.6616 71.818L8.53912 65.6956L2.17516 72.0595ZM11.4796 79.5H60.4592V70.5H11.4796V79.5ZM62.9553 78.7442L72.139 72.6218L67.1467 65.1333L57.963 71.2558L62.9553 78.7442ZM67.0273 39.6312L72.3844 43.4577L77.6156 36.1341L72.2584 32.3076L67.0273 39.6312ZM70.5 39.7959V62.7551H79.5V39.7959H70.5ZM71.6134 59.7918L66.2563 65.9143L73.0294 71.8408L78.3866 65.7184L71.6134 59.7918ZM8.74374 65.9143L3.38659 59.7918L-3.38659 65.7184L1.97055 71.8408L8.74374 65.9143ZM4.5 62.7551V41.3265H-4.5V62.7551H4.5ZM3.18198 44.5085L8.53912 39.1514L2.17516 32.7874L-3.18198 38.1446L3.18198 44.5085Z" 
                            fill="#FFA600" 
                            mask="url(#path-1-inside-1)"/>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                            Weights
                        </h3>
                        <p>
                            By clicking on the "Weights" button you can toggle weights mode. When the button is toggled 
                            you can turn any node into a weighted node, which will make it less prefferable to traverse for a weighted algorithm.
                            However, unweighted algorithms(BFS, DFS) will not be affected.
                        </p>
                    </div>
                </div>
                 {/*  PAGE 5 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(5) }>
                    <div className={ styles.modalImage }>
                        <svg 
                        className={ styles.modalImage }
                        width="150" 
                        height="150" 
                        viewBox="0 0 85 80" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d="M9.75 2H1.5V7M9.75 2V11.5M9.75 2L14.4291 6.75M67.5 60.625V69H57.5M67.5 60.625L64.5 57.5795L62 55.0417L60.1809 53.195M67.5 60.625L1.5 60M44 22L53.5 3L69 10L59.5 28.24M44 22L41 28L42.5 30.5L53.5 35L56.5 34L59.5 28.24M44 22L59.5 28.24M2 11.5H9.75M9.75 11.5V17M9.75 11.5H16.5M9.75 17H16.5M9.75 17V22M9.75 17H1.5M16.5 17V22M16.5 17H22M16.5 17V11.5M16.5 22H22M16.5 22H9.75M16.5 22V28M22 22V28M22 22V17M22 22H28M22 28H28M22 28H16.5M22 28V33.8027M1.5 44L1.51963 43.3717L1.67188 40M1.5 44V33.5M1.5 44V47.25M36 40H40.5H47M36 40V34H40.5L35.3619 28M36 40H32H28M36 40L36.25 43.9315V69M35.3619 28H32H28M35.3619 28L47 40M35.3619 28L32 24.238L30 22M28 28V33.8913M28 28V22M24.5261 17H22M24.5261 17L19.1082 11.5M24.5261 17L30 22M9.75 28H2L1.67188 40M9.75 28V22M9.75 28H16.5M9.75 28V33.6218M9.75 22H1.67188M16.5 28V33.6218M1.67188 22L1.5 17M1.67188 22L1.5 33.5M1.5 17V7M19.1082 11.5H16.5M19.1082 11.5L16.5 9M1.5 7L14.4291 6.75M14.4291 6.75L16.5 9M16.5 11.5V9M1.67188 40H9.75M1.5 33.5L9.75 33.6218M35.3619 34H32L28 33.8913M28 33.8913L22 33.8027M28 33.8913V40M22 33.8027L16.5 33.6218M22 33.8027L21.9375 40M16.5 33.6218H9.75M16.5 33.6218V40M9.75 33.6218V40M9.75 40H16.5M9.75 40V43.6132V69M16.5 40H21.9375M16.5 40V43.6132V56V69M21.9375 40H28M21.9375 40L22 43.7018L22.5 69M28 40V43.7985V69M51.431 44.3125L47 40M51.431 44.3125V69M51.431 44.3125L54.3246 47.25M45 40L45.7052 69M9.75 69H1.5V63V60M9.75 69H16.5M16.5 69H22.5M22.5 69H28M36.25 69H32H28M36.25 69H45.7052M51.431 69H45.7052M51.431 69H57.5M57.5261 50.5L57.5 57.5151V69M30 22H28M1.5 47.25V50.5V53.75M1.5 47.25H54.3246M54.3246 47.25L60.1809 53.195M1.5 53.75V57V60M1.5 53.75L60.1809 53.195" 
                            stroke="#FFA600" 
                            strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                            Cleaning
                        </h3>
                        <p>
                            To clean up the board completely use the "Clean" button.
                            Everything on the board except start and end nodes will be erased.
                        </p>
                    </div>
                </div>
                 {/*  PAGE 6 */}
                <div className={ styles.modalPageContainer } hidden={ pageController(6) }>
                    <div className={ styles.modalImage }>
                        <svg 
                        className={ styles.modalImage } 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="question-circle" 
                        class-name="svg-inline--fa fa-question-circle fa-w-16" 
                        role="img"
                        mlns="http://www.w3.org/2000/svg" 
                        width="120" 
                        height="120" 
                        viewBox="0 0 512 512">
                            <path 
                            fill="#FFA600" 
                            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z">
                            </path>
                        </svg>
                    </div>
                    <div className={ styles.modalBody }>
                        <h3 className={ styles.modalTitle }>
                           About Button
                        </h3>
                        <p>
                            You can open this tutorial again by clicking the "About" button.
                        </p>
                        <p>
                            That's it! Have Fun!
                        </p>
                    </div>
                </div>
                <div className={ styles.modalControl }>
                    <button className={ styles.modalControlButton } onClick={ handleGoPageLeft }>&lt;</button>
                        <span className={ dotStyler(0) }></span>
                        <span className={ dotStyler(1) }></span>
                        <span className={ dotStyler(2) }></span>
                        <span className={ dotStyler(3) }></span> 
                        <span className={ dotStyler(4) }></span>
                        <span className={ dotStyler(5) }></span>
                        <span className={ dotStyler(6) }></span>
                    <button className={ styles.modalControlButton } onClick={ handleGoPageRight }>&gt;</button>
                </div>
            </div>
        </div>
    ) : <></>;

    return  isBrowser ? createPortal(
            modalContent,
            ref.current
            )
            : 
            null;

 });