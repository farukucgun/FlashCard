import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Box, Button, Card, CardContent, CardHeader, Grid, Typography, Stack, Chip, TextField } from "@mui/material";

const NewFlashCard = (props: {onAddCard: React.MouseEventHandler<HTMLElement>}) => {

    const [difficulty, setDifficulty] = useState("medium");
    const questionRef = useRef<HTMLInputElement>(null);
    const answerRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);

    const difficultyHandler = (event: any) => {
        event.preventDefault();
        setDifficulty(event.target.innerText);
    };

    const saveCardHandler = (event: any) => {
        event.preventDefault();
        const body = {
            question: JSON.stringify(questionRef.current?.value),
            answer: JSON.stringify(answerRef.current?.value),
            category: categoryRef.current?.value,
            difficulty: difficulty
        }
        axios.post("http://localhost:5000/flashCard", body)
        .then(() => {
            console.log("card saved");
        })
        .catch((err) => {
            console.log(err);
        });
        props.onAddCard(event);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={4} >
                <Card sx={{ maxWidth: 500, backgroundColor: "#E2e6e8" }}>
                    <CardHeader
                        title="Flash Card Front"
                    />
                    <CardContent>
                        <Typography component="span" variant="body2" color="text.secondary">
                            <TextField
                                id="outlined-multiline-static"
                                label="Category"
                                variant="outlined"
                                fullWidth
                                inputRef={categoryRef}
                            />
                        </Typography>
                        <br />
                        <br />
                        <br />
                        <Typography component="span" variant="body2" color="text.secondary">
                            <TextField
                                id="outlined-multiline-static"
                                label="Question"
                                multiline
                                rows={16}
                                variant="outlined"
                                fullWidth
                                inputRef={questionRef}
                            />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500, backgroundColor: "#E2e6e8" }}>
                    <CardHeader
                        title="Flash Card Back"
                    />
                    <CardContent sx={{}}>
                        <Typography component="span" variant="body2" color="text.secondary">
                            <TextField
                                id="outlined-multiline-static"
                                label="Answer"
                                multiline
                                rows={16}
                                variant="outlined"
                                fullWidth
                                inputRef={answerRef}
                            />
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column"}}>
                            <br />
                            <Stack direction="row" spacing={1}>
                                <Chip label="very easy" color={difficulty==="very easy" ? "primary" : "default"} onClick={difficultyHandler}/>
                                <Chip label="easy" color={difficulty==="easy" ? "primary" : "default"} onClick={difficultyHandler}/>
                                <Chip label="medium" color={difficulty==="medium" ? "primary" : "default"} onClick={difficultyHandler}/>
                                <Chip label="hard" color={difficulty==="hard" ? "primary" : "default"} onClick={difficultyHandler}/>
                                <Chip label="very hard" color={difficulty==="very hard" ? "primary" : "default"} onClick={difficultyHandler}/>
                            </Stack>
                            <br />
                            <Button size="small" variant="contained" color="success" onClick={saveCardHandler}>Save Card</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>    
    )
}

export default NewFlashCard
