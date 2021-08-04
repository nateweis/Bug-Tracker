const colors = ["#b33a3a", "#ff6700", "#32cd32"]
const level = ["High", "Medium", "Low"]

export default (priority) => {
    return {
        level: level[priority - 1],
        color: colors[priority - 1]
    }
}