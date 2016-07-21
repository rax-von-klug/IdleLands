
import { Event } from '../../../core/base/event';
import { MessageCategories } from '../../../shared/adventure-log';

export const WEIGHT = 15;

// Gain 1-3% XP
export class XPBless extends Event {
  static operateOn(player) {
    const percent = Event.chance.floating({ fixed: 5, min: 0.01, max: 0.03 });
    const xpMod = Math.floor(player._xp.maximum * percent);
    const eventText = this.eventText('blessXp', player, { xp: xpMod });

    this.emitMessage({ affected: [player], eventText: `${eventText} [+${xpMod}xp, ~${(percent*100).toFixed(2)}%]`, category: MessageCategories.XP });
    player.gainXp(xpMod);
  }
}