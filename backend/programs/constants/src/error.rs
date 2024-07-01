use anchor_lang::prelude::error_code;

#[error_code]
pub enum LotteryError{
    #[msg("Winner already exists.")]
    WinnerAlreadyExists,

    #[msg("Can't chose a winner when there are no tickets.")]
    NoTickets,

    #[msg("Winner has not been chosen")]
    WinnerNotChosen,

    #[msg("Prize has already been closed")]
    AlreadyClaimed,

    #[msg("You are not the winner")]
    InvalidWinner
}