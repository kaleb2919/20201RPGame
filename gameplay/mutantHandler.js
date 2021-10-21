module.exports = {
    getMutantInstance: async function(models, id) {
        let mutant = await models
            .t_mutant.findOne({
                where: {
                    id: id,
                }
            });

        return {
            name: mutant.c_name,
            description: mutant.c_description,
            health: mutant.c_health,
            current_health: mutant.c_health,
            attack: mutant.c_attack,
            dodge_chance: mutant.c_dodge_chance,
            attack_dispersion: mutant.c_attack_dispersion,
            psi_attack: mutant.c_psi_attack,
            icon: mutant.c_icon
        }
    }
}