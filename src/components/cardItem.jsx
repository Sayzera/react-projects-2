

export const CardItem = ({body}) => {
    /**
     * Diğer tüm proplar içeri aktralım uygun bir css efekti ile görselleştirelim
     */
    return (
        <div style={{
            borderBottom: '1px solid black',
            paddingBottom:'10px'
        }}>{body}</div>
    )
}