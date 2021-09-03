import { IconButton, SvgIcon } from '@material-ui/core';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { ReactComponent as Market } from '../../icons/marketplace.svg';

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
    icon: {
      width: 56,
      height: 56,
      marginBottom: 'var(--spacing-8)'
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

export default function ConfirmItemModal({
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

      <SvgIcon component={Market} className={classes.icon} />

      <h2 className={classes.title}>
        Congrats! Order placed Successfully
      </h2>

      <p className={classes.description}>
        We will be sending shipments every 2 months and you will be notified via email once your order is dispatched.
      </p>
      <ConfirmItemModal />
    </div>
);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      {body}
    </Modal>
);
}
