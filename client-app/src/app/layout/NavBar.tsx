import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img alt='logo' src="/assets/logo.png" style={{marginRight:'10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Activity'/>
                </Menu.Item>
            </Container>

        </Menu>
    )
}