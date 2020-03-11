import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { Container, FlexGridContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const OurNumbersWrapper = styled.section`
    width: 100%;
    background-color: var(--color-grey-8);
    margin: auto;
`

const StyledHeader = styled(Header)`
    margin-top: 1.6rem;
    max-width: 98.4rem;
`

const NumberHeader = styled(Text)`
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 6rem;
    text-align: center;
    margin-bottom: 0.8rem;
`
const OurNumbersContainer = styled(Container)`
    flex-direction: row;
    justify-content: center;
    padding: 8rem 0;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        padding: 3rem 0;
    }
`

const StyledGridContainer = styled(FlexGridContainer)`
    margin-top: 4rem;
`

const OurNumbers = () => (
    <OurNumbersWrapper>
        <OurNumbersContainer>
            <Show.Mobile>
                <Header as="h6" font_size="4rem" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <StyledHeader
                    as="h6"
                    font_size="2rem"
                    lh="1.5"
                    color="black-3"
                    align="center"
                    weight="400"
                >
                    {localize(
                        'Deriv is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world.',
                    )}
                </StyledHeader>
            </Show.Mobile>
            <Show.Desktop>
                <Header font_size="3.6rem" as="h2" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <StyledHeader
                    as="h4"
                    color="black-3"
                    align="center"
                    weight="500"
                    lh="3.6rem"
                    mt="0.8rem"
                >
                    {localize(
                        'Deriv is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world.',
                    )}
                </StyledHeader>
            </Show.Desktop>
            <StyledGridContainer
                content_width="21.5rem"
                gap="1.6rem 0.8rem"
                grid="5"
                justify="center"
            >
                <article>
                    <NumberHeader>20</NumberHeader>
                    <Text align="center">{localize('Years of industry experience')}</Text>
                </article>
                <article>
                    <NumberHeader>1.2M+</NumberHeader>
                    <Text align="center">{localize('Trading accounts opened')}</Text>
                </article>
                <article>
                    <NumberHeader>USD 7B+</NumberHeader>
                    <Text align="center">{localize('Total trade turnover ')}</Text>
                </article>
                <article>
                    <NumberHeader>27M+</NumberHeader>
                    <Text align="center">{localize('Trades last month')}</Text>
                </article>
                <article>
                    <NumberHeader>USD 9M+</NumberHeader>
                    <Text align="center">{localize('Withdrawal last month')}</Text>
                </article>
            </StyledGridContainer>
        </OurNumbersContainer>
    </OurNumbersWrapper>
)

export default OurNumbers
