import '../../public/assets/css/normalize.css';
import '../../public/assets/css/style.css';
import '../../public/assets/css/login.css';

import handsIcon from '../../public/assets/img/hands-icon.png';
import { Link } from 'react-router';

export default function Login() {
    return (
        <div className="welcome">
            <div className="outer-container">
                <div className="help-desc">
                    <span>Help Desk</span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z" fill="#2E2D32" />
                        <path d="M16.4197 20.4375V20.2045C16.4197 19.5606 16.4728 19.0473 16.5788 18.6648C16.6887 18.2822 16.8478 17.9754 17.0561 17.7443C17.2644 17.5095 17.5182 17.2955 17.8175 17.1023C18.0561 16.9508 18.2682 16.7973 18.4538 16.642C18.6432 16.483 18.7929 16.3125 18.9027 16.1307C19.0125 15.9489 19.0675 15.7424 19.0675 15.5114C19.0675 15.2879 19.0144 15.0909 18.9084 14.9205C18.8023 14.75 18.6565 14.6193 18.4709 14.5284C18.2891 14.4337 18.0864 14.3864 17.8629 14.3864C17.6394 14.3864 17.4292 14.4375 17.2322 14.5398C17.0391 14.642 16.88 14.7879 16.755 14.9773C16.6338 15.1629 16.5713 15.3883 16.5675 15.6534H13.9538C13.9652 14.858 14.1489 14.2064 14.505 13.6989C14.8648 13.1913 15.3402 12.8163 15.9311 12.5739C16.522 12.3277 17.1735 12.2045 17.8857 12.2045C18.666 12.2045 19.3591 12.3258 19.9652 12.5682C20.575 12.8106 21.0542 13.1686 21.4027 13.642C21.7512 14.1155 21.9254 14.6951 21.9254 15.3807C21.9254 15.8314 21.8497 16.2292 21.6982 16.5739C21.5466 16.9186 21.3345 17.2235 21.0618 17.4886C20.7929 17.75 20.4766 17.9886 20.1129 18.2045C19.8288 18.3712 19.5921 18.5455 19.4027 18.7273C19.2171 18.9091 19.0769 19.1174 18.9822 19.3523C18.8875 19.5833 18.8402 19.8674 18.8402 20.2045V20.4375H16.4197ZM17.6754 24.1648C17.2663 24.1648 16.916 24.0208 16.6243 23.733C16.3364 23.4451 16.1944 23.0966 16.1982 22.6875C16.1944 22.286 16.3364 21.9432 16.6243 21.6591C16.916 21.3712 17.2663 21.2273 17.6754 21.2273C18.0656 21.2273 18.4084 21.3712 18.7038 21.6591C18.9993 21.9432 19.1489 22.286 19.1527 22.6875C19.1489 22.9602 19.0769 23.2083 18.9368 23.4318C18.8004 23.6553 18.6205 23.8333 18.397 23.9659C18.1773 24.0985 17.9368 24.1648 17.6754 24.1648Z" fill="#CFCFCF" />
                    </svg>
                </div>
            </div>

            <div className="container">
                <Link to="/" className="back-btn">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.625 6H1.375M1.375 6L6.4375 11.0625M1.375 6L6.4375 0.9375" stroke="#ABABB5" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

                <h1 className="welcome__title">Welcome Back to Keplr</h1>
                <div className="welcome__desc">
                    Glad you’re back! <img src={handsIcon} alt="icon" />
                </div>

                <div className="inner-container">
                    <div className="column">
                        <div className="welcome__column-title">Recovery Phrase or Private Key</div>
                        <div className="welcome__column-desc">
                            Use an existing 12/24 word recovery phrase or private key. You can also import wallets from other wallet providers.
                        </div>
                        <Link to="/phrase" className="btn btn--one welcome__column-btn">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_802)">
                                    <path d="M1.5 8.25V9.375C1.5 9.9963 2.00368 10.5 2.625 10.5H9.375C9.9963 10.5 10.5 9.9963 10.5 9.375V8.25M8.25 6L6 8.25M6 8.25L3.75 6M6 8.25V1.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_802">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Use recovery phrase or private key</span>
                        </Link>
                    </div>

                    <div className="column">
                        <div className="welcome__column-title">Use Google</div>
                        <div className="welcome__column-desc">
                            Log in with the same email address to import an existing account to Keplr.
                        </div>
                        <Link to="/phrase" className="btn btn--two welcome__column-btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8898 7.90785H9.1221V10.2297H12.4171C12.275 10.9802 11.8439 11.6149 11.1942 12.0403C10.6451 12.3999 9.94425 12.6125 9.12052 12.6125C7.52572 12.6125 6.1768 11.5571 5.69469 10.139C5.57337 9.7794 5.50313 9.3948 5.50313 8.99925C5.50313 8.60362 5.57337 8.21903 5.69469 7.8594C6.17839 6.44287 7.52737 5.38749 9.1221 5.38749C10.0209 5.38749 10.8271 5.69081 11.4624 6.28495L13.2184 4.56352C12.1568 3.59414 10.7728 3 9.1221 3C6.72915 3 4.65864 4.34462 3.65132 6.30528C3.23627 7.11518 3 8.03138 3 9.00075C3 9.9702 3.23627 10.8848 3.65132 11.6947C4.65864 13.6554 6.72915 15 9.1221 15C10.776 15 12.1616 14.4622 13.1737 13.5459C14.3312 12.5015 15 10.963 15 9.13522C15 8.70997 14.9617 8.3019 14.8898 7.90785Z" fill="white" />
                            </svg>
                            <span>Connect with Google</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}