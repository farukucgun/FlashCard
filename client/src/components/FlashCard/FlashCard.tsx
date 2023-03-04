import React, { useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardHeader, Grid, Typography, Stack, Chip } from "@mui/material";

// interface flashCardInterface {
//     key: String
//     id: String
//     question: String
//     answer: String
//     category: String
//     difficulty: String
// };

/**
 * @TODO: handle props interface 
 * @TODO: being rendered too many times
 * @TODO: some questions don't show up
 * @TODO: add a delete button
*/

const FlashCard = (props: any) => { 

    const flashCard = props.card;
    const [sideFront, setSideFront] = useState(true);
    const [difficulty, setDifficulty] = useState(flashCard.difficulty);

    const cardFlipHandler = () => {
        setSideFront(previousState => !previousState);
    };

    const difficultyHandler = (event: any) => {
        event.preventDefault();

        const body = {
            ...flashCard,
            id: flashCard._id,
            difficulty: event.target.innerText
        }

        setDifficulty(event.target.innerText);

        axios.patch(`http://localhost:5000/flashCard/${flashCard._id}`, body)
        .then(() => {
            console.log("difficulty updated");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    // const deleteCardHandler = (event: any) => {
    //     event.preventDefault();
    //     axios.delete(`http://localhost:5000/flashCard/${flashCard._id}`)
    //     .then(() => {
    //         console.log("card deleted");
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // };

    return (
        <Grid item xs={6}>
            <Card sx={{ maxWidth: 500, backgroundColor: "#E2e6e8" }}>
                <CardHeader
                    title={flashCard.category}
                    
                />
                <CardContent onClick={cardFlipHandler}>
                    <Box sx={{ flexGrow: 1, width: 470, height: 450, border: "solid" }}>
                        <Typography variant="body2" color="text.secondary" whiteSpace="pre">
                            {sideFront ? flashCard.question : flashCard.answer}
                        </Typography>
                    </Box>
                </CardContent>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column"}}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="very easy" color={difficulty==="very easy" ? "primary" : "default"} onClick={difficultyHandler}/>
                        <Chip label="easy" color={difficulty==="easy" ? "primary" : "default"} onClick={difficultyHandler}/>
                        <Chip label="medium" color={difficulty==="medium" ? "primary" : "default"} onClick={difficultyHandler}/>
                        <Chip label="hard" color={difficulty==="hard" ? "primary" : "default"} onClick={difficultyHandler}/>
                        <Chip label="very hard" color={difficulty==="very hard" ? "primary" : "default"} onClick={difficultyHandler}/>
                    </Stack>
                    <br />
                </Box>
            </Card>
        </Grid>
    );
};

export default FlashCard;


