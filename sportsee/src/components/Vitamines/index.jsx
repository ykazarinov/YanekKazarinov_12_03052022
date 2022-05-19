import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
* Hex to RGB transformation
* @description Helper function to convert color format (HEX to RGB) 
* @param {string} hex - String with HEX color code.
* @returns An object with three values: R, G, B.
* @author Tim Down <https://stackoverflow.com/users/96100/tim-down>
*/
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

/**
 * @function ImageContainer
 * @description Creates a DOM element with the specified background color
 *  (RGB format) and the specified transparency.
 * @external styled-components
 * @param {string} bgR - The first value (corresponding to R) of the RGB color format
 * @param {string} bgG - The first value (corresponding to G) of the RGB color format
 * @param {string} bgB - The first value (corresponding to B) of the RGB color format
 * @returns DOM element with corresponding CSS class
*/
const ImageContainer = styled.div`
    background-color: rgba(${({bgR}) => bgR}, ${({bgG}) => bgG}, ${({bgB}) => bgB}, .3);
`
    /**
    * Key digit block.
    * @description Displays a key figure block with information about calories, proteins, 
    * carbohydrates and fats for the day. 
    * @param {number} Data - The amount of useful elements consumed..
    * @param {Object} styledData - Additional block data (unit, icon, explanatory text, block color).
    * @external Recharts library.
    * @returns Key digit React Element.
    * @author Kazarinov Yanek aka Artfish <artfish.pro>
    */
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
Vitamines.propTypes = {
    Data: PropTypes.number,
    styledData: PropTypes.object
  }

export default Vitamines