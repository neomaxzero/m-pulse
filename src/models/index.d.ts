import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Scores {
  readonly id: string;
  readonly score?: string;
  readonly date?: string;
  constructor(init: ModelInit<Scores>);
  static copyOf(source: Scores, mutator: (draft: MutableModel<Scores>) => MutableModel<Scores> | void): Scores;
}