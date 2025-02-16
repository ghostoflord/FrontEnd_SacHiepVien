import { Footer } from "antd/es/layout/layout";

const FooterPage = () => {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                SacHiepVien ©{new Date().getFullYear()} Created by Ghost
            </Footer>
        </>
    )
}
export default FooterPage;