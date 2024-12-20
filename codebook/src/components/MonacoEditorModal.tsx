import {useRef, useState, useLayoutEffect, ChangeEvent} from 'react';
import * as monaco from 'monaco-editor';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Select} from '@mui/material';
import MonacoEditor from 'react-monaco-editor';
const MonacoEditorModal = ({ open, onClose, onSubmit}) => {
    const [editorValue, setEditorValue] = useState('// Write your code her');
    const [language, setLanguage] = useState<string>("javascript");
    const monacoContainerRef = useRef(null);
    const editorRef = useRef(null);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    }

    useLayoutEffect(() => {
        if (open && monacoContainerRef.current && !editorRef.current) {
            editorRef.current = monaco.editor.create(monacoContainerRef.current, {
                value: editorValue,
                language: language,
                theme: 'vs-dark',
                automaticLayout: true,
            });

            editorRef.current.onDidChangeModelContent(() => {
                setEditorValue(editorRef.current.getValue());
            });
        }

        return () => {
            if (editorRef.current) {
                editorRef.current.dispose();
                editorRef.current = null;
            }
        };
    }, [open]);



    const handleSubmit = () => {
        onSubmit(editorValue);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle >Insert/Edit Code Snippet</DialogTitle>

            <DialogContent  dividers>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    onChange={handleChange}
                    fullWidth
                    style={{marginBottom: '14px'}}
                >
                    <MenuItem value={"javascript"}>JavaScript</MenuItem>
                    <MenuItem value={"python"}>Python</MenuItem>
                    <MenuItem value={"html"}>HTML</MenuItem>
                </Select>
                <MonacoEditor
                    value={editorValue}
                    height="400"
                    language={language}
                    theme="vs-dark"
                    onChange={(value) => setEditorValue(value)}
                />
            </DialogContent>
            <DialogActions style={{ padding: '20px' }}>
                <Button onClick={onClose} style={{color:'#7692FF'}}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} style={{backgroundColor:'#7692FF'}} color="primary" variant="contained">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MonacoEditorModal;
