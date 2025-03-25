"use client";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    Stack,
  } from '@mui/material';
  import { useState } from 'react';
  
  interface CreatePostProps {
    open: boolean;
    onClose: () => void;
    onSave: (article: { title: string; content: string }) => void;
  }
  
  export default function CreatePost({ open, onClose, onSave }: CreatePostProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSave = () => {
      onSave({ title, content });
      setTitle('');
      setContent('');
      onClose();
    };
  
    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: 600 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Write an Article
          </Typography>
  
          <Stack spacing={2}>
            <TextField
              label="Title"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Content"
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button onClick={onClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleSave} variant="contained">
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    );
  }
  