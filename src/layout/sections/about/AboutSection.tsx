import React from "react";
import styled from "styled-components";
import sourceImage from "../../../assets/images/aboutMePicture.webp";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

type AboutSectionProps = {
    backgroundSrc: string;
};

export const AboutSection = (props: AboutSectionProps) => {
    return (
        <StyledAbout {...props}>
            <Container>
                <FlexWrapper align={"center"} justify={"center"}>
                    <div id={"images"}>
                        <img id={"first_img"} src={sourceImage} alt="smth"></img>
                        <img id={"second_img"} src={sourceImage} alt="smth"></img>
                    </div>
                    <div id={"center"}>
                        <h2>About me</h2>
                        <p>
                            Hello again everyone! So, you already know that my name is Gleb. A
                            little about myself: student, 18 y.o., athlete-football player, I
                            love creativity since childhood, I live in Donetsk, Ukraine. Why
                            programming? Everything is elementary - I like it, the profession of
                            the future, thanks to which I can provide myself and fulfill my
                            dream - travel, at the moment I specialize in web design, front-end
                            and back-end development, turnkey websites. Why should you choose
                            me? I approach each order with great responsibility and love, as I
                            want to make a name for myself, exclude plagiarism and negligence,
                            fully study the project, the client and its target audience, work
                            for quality, trying to make an order as quickly and uniquely as
                            possible, taking into account all the edits and wishes. By trusting
                            me, you will get the maximum return for your project, save your
                            nerves and time. If you are interested in me , you want to know
                            something more or use my services, then I will provide all my
                            contacts below.
                        </p>
                    </div>
                    <div>
                        <img id={"second_img"} src={sourceImage} alt="smth"></img>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section<AboutSectionProps>`
    margin: 0 auto;
    background-image: url(${(props) => props.backgroundSrc ? `${props.backgroundSrc}` : ""});
    background-repeat: no-repeat;
    background-position: top;

    #images {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 100px;
        margin-right: -20px;
    }

    h2 {
        font-size: 48px;
        margin: 0 0 -40px 20px;
    }

    p {
        background-color: #2C2C2C;
        width: 300px;
        padding: 50px 50px 50px 30px;
        border-radius: 10px;
        font-size: 14px;
    }

    img {
        border-radius: 5%;
        padding: 10px;
        background-color: #2C2C2C;
        height: 250px;
    }
`;
