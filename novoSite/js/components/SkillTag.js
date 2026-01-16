/**
 * SkillTag Component
 * Componente para representar uma competência/skill
 */

export class SkillTag {
  constructor(skill) {
    this.skill = skill;
  }

  render() {
    return `<span class="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 font-medium shadow-sm">${this.skill}</span>`;
  }
}

export default SkillTag;
