import React, {FC, ReactNode} from 'react'
import Footer from '@/widget/Footer/Footer'
import Header from '@/widget/Header/Header'

interface IProps {
    children: ReactNode
}

const MainApp: FC<IProps> = (props) => {
    const { children } = props

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainApp