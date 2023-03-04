import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import FlashCard from "../FlashCard/FlashCard";

interface flashCardInterface {
    _id: String
    question: String
    answer: String
    category: String
    difficulty: String
};

const FlashCards = () => {
    const [flashCards, setFlashCards] = useState<flashCardInterface[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/flashCard")
        .then((data) => {
            setFlashCards(data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={10} >
                    {flashCards.map((flashCard: flashCardInterface) => (
                        <FlashCard card={flashCard} key={flashCard._id}/>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default FlashCards;
