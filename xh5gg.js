//Easier H5gg
        class xh5gg
        {
            number(number, type="I32", min="0x10000000", max="0x900000000")
            {
                //你可以没有类型，但是不能过分到连数值都不写
                h5gg.searchNumber(number, type, min, max);
            }
            nearby(number, type, near="0x100")
            {
                h5gg.searchNearby(number, type, near);
            }
            clear(force=true)
            {
                if (force)
                {
                    h5gg.clearResults();
                    xh5gg.number('999');
                    h5gg.clearResults();
                    h5gg.clearResults();
                    h5gg.clearResults();
                }
                else
                {
                    h5gg.clearResults();
                }
            }
            editall(tonumber, type="I32")
            {
                h5gg.editAll(tonumber, type);
            }
            edit(address, tonumber, type="I32")
            {
                h5gg.setValue(address, tonumber, type)
            }
            get(address, type="I32")
            {
                return h5gg.getValue(address, type)
            }
            getrc()
            {
                return h5gg.getResultsCount()
            }
            results(counts=1, jump=0)
            {
                return h5gg.getResults(counts, jump)
            }
            dylib(oc="",path="")
            {
                if (path="")
                {
                    console.log("请勿传入空路径")
                }
                else if (oc="")
                {
                    console.log("请传入OC类名")
                }
                else
                {
                    return h5gg.loadPlugin(oc, path)
                }
            }
        }
