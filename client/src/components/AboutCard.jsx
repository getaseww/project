import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageAvatar from './ImageAvarar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';

const style = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};
const titleStyle = {
    pl: 5,
    pr: 5,
    pt: 2,
    fontSize: 20,
    fontWeight: 600,
};

export default function AboutCard() {
    const { profile } = useSelector((state) => state.profile)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4 }}>
                            <Grid item lg={10}>
                                <Typography sx={{ fontSize: 18, fontWeight: 600, paddingTop: 2 }} color="text.primary" gutterBottom>
                                    About
                                </Typography>
                            </Grid>
                            <Grid item lg={2}>
                                <IconButton onClick={handleOpen}>
                                    {profile ?
                                        < EditIcon /> : < AddIcon />}
                                </IconButton>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography sx={titleStyle} id="modal-modal-title" variant="h6" component="h2">
                                            {profile ? "Update About Yourself" : "Post About Yourself"}
                                        </Typography>
                                        <Divider />
                                    </Box>
                                </Modal>
                            </Grid>
                        </Grid>
                        <Typography sx={{ fontSize: 17, paddingTop: 2 }} color="text.primary" gutterBottom>
                            I am a Web and mobile app developer with industry experience building software , web applications and mobile apps . I specialize in Flutter for mobile app development and have experience working with node.js ,Laravel ,MySQL and MongoDb. I also have experience working with Vue 3.
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>)
}