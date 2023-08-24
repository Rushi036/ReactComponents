import React from "react";
import { Delete, Edit, AddCircle } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  Button,
  Modal,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Openable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="text-xl border-b-2  border-blue-200 pb-2">Openable</div>
      <div className="flex pt-8 justify-around">
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">
              Accordian
            </div>
            <div className="mt-4 rounded-md">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="card w-2/5 h-32 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">
              Modal
            </div>

            <Button className="btn p-2 bg-gray-200 text-white mt-4" onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                 Hello World!!
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Openable;
