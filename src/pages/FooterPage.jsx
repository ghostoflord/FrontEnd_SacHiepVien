import { Footer } from "antd/es/layout/layout";

const FooterPage = () => {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </>
    )
}
export default FooterPage;