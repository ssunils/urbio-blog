'use client';
import { Button } from "@mui/material"
import CreatePost from "./CreatePost"
import { EditNote } from "@mui/icons-material"
import { useState } from "react";

export const WriteButton = () => {
    const [open, setOpen] = useState(false);

    const handleSave = (article: { title: string; content: string }) => {
        console.log('Saved article:', article);
    };
    return (
        <>
            <Button
                variant="outlined"
                color='secondary'
                startIcon={<EditNote />}
                sx={{ textTransform: 'none' }}
                onClick={() => setOpen(true)}
            >
                Write
            </Button>
            <CreatePost open={open} onClose={() => setOpen(false)} onSave={handleSave} />
        </>
    )
}