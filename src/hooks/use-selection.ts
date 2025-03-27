// import * as React from 'react';

// export interface Selection<T = string> {
//   deselectAll: () => void;
//   deselectOne: (key: T) => void;
//   selectAll: () => void;
//   selectOne: (key: T) => void;
//   handleDisable: (key: T) => void;
//   handleActivate: (key: T) => void;
//   selected: Set<T>;
//   selectedAny: boolean;
//   selectedAll: boolean;
// }

// // IMPORTANT: To prevent infinite loop, `keys` argument must be memoized with React.useMemo hook.
// export function useSelection<T = string>(keys: T[] = []): Selection<T> {
//   const [selected, setSelected] = React.useState<Set<T>>(new Set());

//   React.useEffect(() => {
//     setSelected(new Set());
//   }, [keys]);

//   const handleDeselectAll = React.useCallback(() => {
//     setSelected(new Set());
//   }, []);

//   const handleDeselectOne = React.useCallback((key: T) => {
//     setSelected((prev) => {
//       const copy = new Set(prev);
//       copy.delete(key);
//       return copy;
//     });
//   }, []);

//   const handleDisable = async (id: string) => {
//     try {
//       // API call or logic to disable the user
//       console.log(`User with ID ${id} disabled.`);
//     } catch (error) {
//       console.error("Error disabling user:", error);
//     }
//   };
  
//   const handleActivate = async (id: string) => {
//     try {
//       // API call or logic to activate the user
//       console.log(`User with ID ${id} activated.`);
//     } catch (error) {
//       console.error("Error activating user:", error);
//     }
//   };

//   const handleSelectAll = React.useCallback(() => {
//     setSelected(new Set(keys));
//   }, [keys]);

//   const handleSelectOne = React.useCallback((key: T) => {
//     setSelected((prev) => {
//       const copy = new Set(prev);
//       copy.add(key);
//       return copy;
//     });
//   }, []);

//   const selectedAny = selected.size > 0;
//   const selectedAll = selected.size === keys.length;

//   return {
//     deselectAll: handleDeselectAll,
//     deselectOne: handleDeselectOne,
//     selectAll: handleSelectAll,
//     selectOne: handleSelectOne,
//     selected,
//     selectedAny,
//     selectedAll,
//   };
// }
import * as React from 'react';

export interface Selection<T = string> {
  deselectAll: () => void;
  deselectOne: (key: T) => void;
  selectAll: () => void;
  selectOne: (key: T) => void;
  // handleDisable: (key: T) => Promise<void>;
  // handleActivate: (key: T) => Promise<void>;
  selected: Set<T>;
  selectedAny: boolean;
  selectedAll: boolean;
}

// IMPORTANT: To prevent infinite loop, `keys` argument must be memoized with React.useMemo hook.
export function useSelection<T = string>(keys: T[] = []): Selection<T> {
  const [selected, setSelected] = React.useState<Set<T>>(new Set());

  React.useEffect(() => {
    setSelected(new Set());
  }, [keys]);

  const handleDeselectAll = React.useCallback(() => {
    setSelected(new Set());
  }, []);

  const handleDeselectOne = React.useCallback((key: T) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      copy.delete(key);
      return copy;
    });
  }, []);

  // const handleDisable = React.useCallback(async (id: T) => {
  //   try {
  //     // API call or logic to disable the user
  //     console.log(`User with ID ${id} disabled.`);
  //   } catch (error) {
  //     console.error("Error disabling user:", error);
  //   }
  // }, []);

  // const handleActivate = React.useCallback(async (id: T) => {
  //   try {
  //     // API call or logic to activate the user
  //     console.log(`User with ID ${id} activated.`);
  //   } catch (error) {
  //     console.error("Error activating user:", error);
  //   }
  // }, []);

  const handleSelectAll = React.useCallback(() => {
    setSelected(new Set(keys));
  }, [keys]);

  const handleSelectOne = React.useCallback((key: T) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      copy.add(key);
      return copy;
    });
  }, []);

  const selectedAny = selected.size > 0;
  const selectedAll = selected.size === keys.length;

  return {
    deselectAll: handleDeselectAll,
    deselectOne: handleDeselectOne,
    selectAll: handleSelectAll,
    selectOne: handleSelectOne,
    // handleDisable,
    // handleActivate,
    selected,
    selectedAny,
    selectedAll,
  };
}
