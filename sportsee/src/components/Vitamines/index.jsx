import styled from 'styled-components'

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

    const ImageContainer = styled.div`
        background-color: rgba(${({bgR}) => bgR}, ${({bgG}) => bgG}, ${({bgB}) => bgB}, .3);
    `

    function Vitamines({Data, styledData}){
    return(
        <div className="vitamine-block">
            <ImageContainer 
                className="vitamine-block--image" 
                bgR={hexToRgb(styledData.bgColor).r}
                bgG={hexToRgb(styledData.bgColor).g}
                bgB={hexToRgb(styledData.bgColor).b}
            >
                <img src={styledData.image} alt={styledData.text} />
            </ImageContainer>
            <div className="vitamine-block--content">
                <div className="vitamine-block--content--value">{Data}{styledData.unit}</div>
                <div className="vitamine-block--content--text">{styledData.text}</div>
            </div>
            
        </div>
    )
}
export default Vitamines