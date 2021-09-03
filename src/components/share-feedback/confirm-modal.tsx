import { IconButton } from '@material-ui/core';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      top: '50% !important',
      left: '50% !important',
      transform: 'translate(-50%, -50%)',
      width: 648,
      padding: 'var(--spacing-6) var(--spacing-8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 'var(--border-radius-xxl)',
      border: 'solid 1px var(--border-bg-color)',
      backgroundColor: 'white'
    },
    title: {
      fontSize: 24,
      marginBottom: 'var(--spacing-5)'
    },
    description: {
      fontWeight: 300
    },
    closeButton: {
      position: 'absolute',
      right: 'var(--spacing-3)',
      top: 'var(--spacing-3)'
    }
  }),
);

export default function ConfirmModal({
  open,
  handleClose
}: any) {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      {handleClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
      <h2 className={classes.title}>
        Thank you for sharing the feedback
      </h2>

      <p className={classes.description}>
        50 Coins will be credited to your wallet for the feedback provided.
      </p>
      <ConfirmModal />
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
