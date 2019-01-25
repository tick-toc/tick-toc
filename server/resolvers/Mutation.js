const Mutation = {
  createGame(parent, args, context) {
    return context.prisma.createGame({gameStatus: "INPROGRESS"})
  }
}

module.exports = Mutation